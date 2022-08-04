import { Model } from "@/_backend/models/base";
import { get } from "lodash";
import { EnumUserStatus } from "@/_backend/req_res_interfaces/user/EnumUserStatus";
import { EnumUserRole } from "@/_backend/req_res_interfaces/user/EnumUserRole";

export class User extends Model {
	static ROLE_ADMIN = "ADMIN";
	static ROLE_MANAGER = "MANAGER";
	static ROLE_USER = "USER";

	static ROLE_LIST_ALL = ["ADMIN", "MANAGER", "USER"];
	static ROLE_LIST_ADMIN_MANAGER = ["ADMIN", "MANAGER"];

	static STATUS_ACTIVE = "ACTIVE";
	static STATUS_INACTIVE = "INACTIVE";

	public username: string;
	public email: string;
	public full_name: string;
	public profile_pic: string;
	public password: string;
	public confirm_password: string;

	public role: EnumUserRole;
	public status: EnumUserStatus;

	constructor(attributes: object = {}) {
		super(attributes);

		this.username = get(attributes, "username", "");
		this.email = get(attributes, "email", "");
		this.full_name = get(attributes, "full_name", "");
		this.profile_pic = get(attributes, "profile_pic", "");
		this.role = get(attributes, "role", EnumUserRole.user);
		this.status = get(attributes, "status", EnumUserStatus.active);

		this.password = "";
		this.confirm_password = "";
	}

	isAdmin() {
		return this.role === User.ROLE_ADMIN;
	}
}
