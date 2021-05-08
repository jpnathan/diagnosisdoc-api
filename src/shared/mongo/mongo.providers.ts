import { connect, Mongoose } from 'mongoose';
import { Provider } from '@nestjs/common';

export const MongoProviders: Provider[] = [
  {
    provide: 'MONGO_CONNECTION',
    useFactory: (): Promise<Mongoose> =>
      connect(process.env.MONGODB_URI || process.env.MONGO_URL, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }),
    inject: [],
  },
];
