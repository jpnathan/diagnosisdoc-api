import { Response } from 'express';
import { IObjectBase } from '../object-base.interface';
import { StatusCodes } from 'http-status-codes';

const { OK, NOT_FOUND, INTERNAL_SERVER_ERROR } = StatusCodes;

interface IResultData {
  res: Response;
  result: IObjectBase | IObjectBase[] | string | boolean;
  status?: boolean;
  httpStatusCode?: number;
  errorMessage?: string;
  defaultValue?: IObjectBase | IObjectBase[];
}

interface IResponseData {
  data: IObjectBase;
  statusCode: number;
}

function getResultStatusCode(
  status: boolean | undefined,
  httpStatusCode: number | undefined,
): number {
  return httpStatusCode || (status && OK) || NOT_FOUND;
}

function getResultDataStatus(
  status: boolean | undefined,
  resultData: IObjectBase | string | boolean,
): boolean {
  if (status !== undefined) {
    return status;
  }
  if (Array.isArray(resultData)) {
    return resultData.length > 0;
  }
  return !!resultData;
}

function getResultData(resultData: IResultData): IResponseData {
  const { httpStatusCode, status, defaultValue } = resultData;
  const resultDataStatus: boolean = getResultDataStatus(
    status,
    resultData.result,
  );

  return {
    data: {
      status: resultDataStatus,
      result: resultData.result || defaultValue || {},
    },
    statusCode: getResultStatusCode(resultDataStatus, httpStatusCode),
  };
}

export function handleHttpResponse(
  resultData: IResultData,
): Response<IResponseData> {
  const { res } = resultData;
  const { data, statusCode } = getResultData(resultData);
  return res.status(statusCode).json(data);
}

export function handleHttpResponseError(
  resultData: IResultData,
): Response<IResponseData> {
  const { res, errorMessage } = resultData;
  resultData.httpStatusCode = INTERNAL_SERVER_ERROR;
  resultData.status = false;
  const { data, statusCode } = getResultData(resultData);
  const errorData: IObjectBase = {
    ...data,
    error: errorMessage,
  };
  return res.status(statusCode).json(errorData);
}
