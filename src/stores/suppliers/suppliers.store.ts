import { defineStore } from "pinia";
import type { SupplierGetData } from "@/_backend/models/suppliers/SupplierGetData";
import { ApiSuppliers } from "@/_backend/api/ApiSuppliers";

export const useStoreSuppliers = defineStore("Suppliers", {
	state: () => ({
		suppliers: [] as SupplierGetData[],

		suppliersFetched: false,
	}),

	getters: {
		getSuppliers(state): SupplierGetData[] {
			return state.suppliers;
		},

		isSuppliersFetched(state) {
			return state.suppliersFetched;
		},
	},

	actions: {
		async fetchSuppliers() {
			this.suppliersFetched = false;
			this.suppliers = await ApiSuppliers.getSuppliers();
			this.suppliersFetched = true;
		},
	},
});
