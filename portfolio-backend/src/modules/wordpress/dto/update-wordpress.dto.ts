import { PartialType } from '@nestjs/mapped-types';
import { CreateWordpressDto } from './create-wordpress.dto';

export class UpdateWordpressDto extends PartialType(CreateWordpressDto) {}
