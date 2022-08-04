import { get } from "lodash";

export class Model {
	public id?: number;
	public added_at?: string;
	public updated_at?: string;

	constructor(attributes: object) {
		this.id = get(attributes, "id", undefined);
		this.added_at = get(attributes, "added_at", undefined);
		this.updated_at = get(attributes, "updated_at", undefined);
	}

	toString() {
		return JSON.stringify(this);
	}
}
