/** interface for the todo Item */
import { z } from "zod";

export interface todoModel {
  id: string;
  username: string;
  title: string;
  description: string;
  postedAt: Date;
}
