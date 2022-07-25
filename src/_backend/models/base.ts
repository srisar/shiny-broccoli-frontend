import { get } from "lodash";

export class Model {
	public id: number | null;
	public added_at: string | null;
	public updated_at: string | null;

	constructor(attributes: object) {
		this.id = get(attributes, "id", null);
		this.added_at = get(attributes, "added_at", null);
		this.updated_at = get(attributes, "updated_at", null);
	}

	toString() {
		return JSON.stringify(this);
	}
}
