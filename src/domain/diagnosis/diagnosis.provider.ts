import { Provider } from '@nestjs/common';
import { Connection, Model, Document } from 'mongoose';
import { DiagnosisSchema } from './diagnosis.schema';
import { DB_USER_NAME } from '../../shared/constants';

export const diagnosisProviders: Provider[] = [
  {
    provide: 'DIAGNOSIS_MODEL',
    useFactory: (connection: Connection): Model<Document> =>
      connection.model(DB_USER_NAME, DiagnosisSchema),
    inject: ['MONGO_CONNECTION'],
  },
];
