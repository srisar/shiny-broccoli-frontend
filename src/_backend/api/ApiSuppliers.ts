import type { SupplierPostData } from "@/_backend/models/suppliers/SupplierPostData";
import type { SupplierGetData } from "@/_backend/models/suppliers/SupplierGetData";
import { AxiosService } from "@/services/axios_service";

export class ApiSuppliers {
	private static BASE_PATH = "/suppliers";

	public static async postSupplier(supplier: SupplierPostData): Promise<SupplierGetData> {
		const response = await AxiosService.instance().post(ApiSuppliers.BASE_PATH + "/create.php", {
			...supplier,
		});

		return response.data["payload"]["data"];
	}

	public static async getSuppliers(): Promise<SupplierGetData[]> {
		const response = await AxiosService.instance().get(ApiSuppliers.BASE_PATH + "/all.php");

		return response.data["payload"];
	}
}
