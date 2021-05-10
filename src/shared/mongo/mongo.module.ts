import { Global, Module } from '@nestjs/common';

import { mongoProviders } from './mongo.providers';

@Global()
@Module({
  providers: [...mongoProviders],
  exports: [...mongoProviders],
})
export class MongoModule {}
