import { getRobloxGroup } from "./api";

export async function fetchGroup(groupId: string) {
  return await getRobloxGroup(groupId);
}