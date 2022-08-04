import type { IUserPostData } from "@/_backend/req_res_interfaces/user/IUserPostData";
import { AxiosService } from "@/services/axios_service";

export class ApiUsers {
	private static BASE_PATH = "/users";

	public static async getAllUsers() {}

	public static async updateUser(user: IUserPostData) {
		return await AxiosService.instance().post(this.BASE_PATH + "/update.php", user);
	}
}
