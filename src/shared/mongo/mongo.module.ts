import { Global, Module } from '@nestjs/common';

import { MongoProviders } from './mongo.providers';

@Global()
@Module({
  providers: [...MongoProviders],
  exports: [...MongoProviders],
})
export class MongoModule {}
