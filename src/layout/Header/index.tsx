import AppBarComponent from "../../component/AppBar";
import { AppService } from "../../core/app/app.service";
import './Header.scss';
import { useEffect, useState } from 'react';
import { NavPageConfig } from '../../domain/interface/common';

export const HeaderLayout = () => {
  const appService = new AppService();
  const [ _appName, setAppName ] = useState<string>('Roy Chuang');
  const [ _navPages, setNavPages ] = useState<NavPageConfig[]>([]);

  const asyncData = async () => {
    const { name } = await appService.getApp();
    const navPages = await appService.getNavPageConfig();
    setAppName(name);
    setNavPages(navPages);
  };
  
  useEffect(() => {
    asyncData();
  }, []);

  return (
    <header>
      <AppBarComponent name={_appName} content={_navPages} />
    </header>
  );
};