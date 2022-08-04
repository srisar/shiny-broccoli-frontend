import type { EnumUserRole } from "@/_backend/req_res_interfaces/user/EnumUserRole";
import type { EnumUserStatus } from "@/_backend/req_res_interfaces/user/EnumUserStatus";

export interface IUserGetData {
	id?: number;
	username?: string;
	email?: string;
	full_name?: string;
	profile_pic?: string;
	role?: EnumUserRole;
	status?: EnumUserStatus;
}
