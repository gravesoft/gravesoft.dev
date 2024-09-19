# Office C2R Custom Install

## Notes

-   If the below guide is confusing to you then the simplest option for you is to use [Office C2R Installer](office_c2r_links.md).
-   Retail Office (e.g. O365) has latest feature updates and Volume Office (e.g. ProPlus 2021) doesn't.
-   Please note that in the official C2R office custom installation method, there is no ISO or any one-click solution available. Below is the simplest guide to installing customized office.

:::tip

-   Russian users needs to follow [this guide](bypass-russian-geoblock.md) to bypass geoblock in Office downloading.

:::

------------------------------------------------------------------------

## Custom Installation Guide

-   If Office was ever installed before,
	- Uninstall Office with the App and Features option in Windows settings.
	- Run `OfficeScrubber.cmd` file from [Office Scrubber](https://github.com/abbodi1406/WHD/raw/master/scripts/OfficeScrubber_13.zip) by abbodi1406 and select `[R] Remove all Licenses` option.
-   Create a new folder named `Office` in `C:\` drive, example `C:\Office`
-   Download [Office Deployment Tool](https://officecdn.microsoft.com/pr/wsus/setup.exe) (ODT)
-   Copy the downloaded `setup.exe` file to that Office folder which you created, example `C:\Office\setup.exe`
-   Go to [config.office.com](https://config.office.com/deploymentsettings)
-   If you want Retail Office then select `Microsoft 365 Apps for enterprise` in the office suites section.
-   If you want Volume Office then select `Office LTSC Professional Plus 2021 - Volume License` in the office suites section. (Don't select the SPLA version)
-   You can add Visio and Project apps if you need them. Don't select language that is [not available for Project/Visio](office_c2r_links.md) if you are installing those apps.
-   Customize other things and leave settings as default if you don't understand something.
-   Once you go through all the options, click on the export button, select "Keep Current Settings" option and it will download a file named `Configuration.xml` (If the name is something else then change it to `Configuration.xml`
-   Copy the downloaded `Configuration.xml` file to that Office folder which you created, example `C:\Office\Configuration.xml`
-   Open the **command prompt** (not Powershell) as admin and run the below commands  
    ```         
    cd /d C:\Office\
    setup.exe /configure Configuration.xml
    ```

It will now download and install Office. You can activate it with your preferred method.

:::tip[Common errors]

- File name extensions are hidden by default in Windows. Due to that, some people might incorrectly rename `Configuration.xml` to `Configuration.xml.xml` because `.xml` was not visible.

:::

------------------------------------------------------------------------

## Alternative Methods

-   [YAOCTRU](https://github.com/abbodi1406/WHD/raw/master/scripts/YAOCTRU_v10.0.zip) (Office Downloader) & [YAOCTRI](https://github.com/abbodi1406/WHD/raw/master/scripts/YAOCTRI_v11.1.zip) (Office Installer)
-   [Office Tool Plus](http://otp.landian.vip/)

------------------------------------------------------------------------

## Need help?

-   Check [here](troubleshoot.md).
