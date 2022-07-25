import { Model } from "@/_backend/models/base";
import { get } from "lodash";

export class User extends Model {
	static ROLE_ADMIN = "ADMIN";
	static ROLE_MANAGER = "MANAGER";
	static ROLE_USER = "USER";

	static ROLE_LIST_ALL = ["ADMIN", "MANAGER", "USER"];
	static ROLE_LIST_ADMIN_MANAGER = ["ADMIN", "MANAGER"];

	static STATUS_ACTIVE = "ACTIVE";
	static STATUS_INACTIVE = "INACTIVE";

	public username: string;
	public role: string;
	public email: string;
	public full_name: string;
	public profile_pic: string;
	public status: string;
	public password: string;
	public confirm_password: string;

	constructor(attributes: object) {
		super(attributes);

		this.username = get(attributes, "username", "");
		this.role = get(attributes, "role", "USER");
		this.email = get(attributes, "email", "");
		this.full_name = get(attributes, "full_name", "");
		this.profile_pic = get(attributes, "profile_pic", "");
		this.status = get(attributes, "status", User.STATUS_ACTIVE);

		this.password = "";
		this.confirm_password = "";
	}

	isAdmin() {
		return this.role === User.ROLE_ADMIN;
	}
}
