import type { SupplierBaseData } from "@/_backend/models/suppliers/SupplierBaseData";
import type { SupplierStatus } from "@/_backend/models/suppliers/SupplierStatus";

export interface SupplierGetData extends SupplierBaseData {
	id: number;
	added_at: string;
	updated_at: string;
	status: SupplierStatus;
}
