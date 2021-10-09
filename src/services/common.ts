import { POST } from "../utils/request";
// 示例
export async function test(params: object) {
    return POST({ url: "api/test", data: params })
}