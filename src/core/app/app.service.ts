import { NavPageConfig } from "../../domain/interface/common";

export class AppService {
    async getApp(): Promise<{
        name: string
    }> {
        return {
            name: 'Jubo測驗小專案',
        };
    }

    async getNavPageConfig(): Promise<NavPageConfig[]> {
        const pages: NavPageConfig[] = [];
        return pages;
    }
}