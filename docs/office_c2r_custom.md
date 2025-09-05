# Office C2R Custom Install

## Notes

-   If the below guide is confusing to you then the simplest option for you is to use [Office C2R Installer](office_c2r_links.md).
-   Retail Office (e.g. O365) has latest feature updates and Volume Office (e.g. ProPlus 2024) doesn't.
-   Please note that in the official C2R office custom installation method, there is no ISO or any one-click solution available. Below is the simplest guide to installing customized office.

:::tip

-   Russian users needs to follow [this guide](bypass-russian-geoblock.md) to bypass geoblock in Office downloading.

:::

------------------------------------------------------------------------

## Custom Installation Guide

-   If Office was ever installed before,
	- Uninstall Office with the App and Features option in Windows settings.
	- Run `OfficeScrubber.cmd` file from [Office Scrubber](https://github.com/abbodi1406/WHD/raw/master/scripts/OfficeScrubber_14.zip) by abbodi1406 and select `[R] Remove all Licenses` option.
-   Create a new folder named `Office` in `C:\` drive, example `C:\Office`
-   Download [Office Deployment Tool](https://officecdn.microsoft.com/pr/wsus/setup.exe) (ODT)
-   Copy the downloaded `setup.exe` file to that Office folder which you created, example `C:\Office\setup.exe`
-   Go to [config.office.com](https://config.office.com/deploymentsettings)
-   If you want Retail Office then select `Microsoft 365 Apps for enterprise` in the office suites section.
-   If you want Volume Office then select `Office LTSC Professional Plus 2024 - Volume License` in the office suites section. (Don't select the SPLA version)
-   You can add Visio and Project apps if you need them, but ensure that [Project](https://learn.microsoft.com/en-us/projectonline/supported-languages-for-project-online) / [Visio](https://support.microsoft.com/en-us/office/display-languages-supported-in-the-visio-desktop-app-a921983e-fd5d-45ef-8af1-cedf70c53d75) supported language is selected.
-   If you are planning to download Office files and install them later, then ensure that you select a specific version number instead of the latest in the `Select the version` option.
-   You need to configure the options till "Language" section only. You can leave the rest as default.
-   Click on the export button, select "Keep Current Settings" option and it will download a file named `Configuration.xml` (If the name is something else then change it to `Configuration.xml`
-   Copy the downloaded `Configuration.xml` file to that Office folder which you created, example `C:\Office\Configuration.xml`

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
<TabItem value="direct_install" label="Direct Install" default>

-   Open the **command prompt** (not Powershell) **as admin** and run the below commands  
    ```         
    cd /d C:\Office\
    setup.exe /configure Configuration.xml
    ```

It will now install Office.

</TabItem>

<TabItem value="download_and_install" label="Download and then install" default>

-	Ensure that you have selected a specific version number in the configuration as per the above steps.
-   Open the **command prompt** (not Powershell) **as admin** and run the below commands  
	- Download Office files
    ```         
    cd /d C:\Office\
    setup.exe /download Configuration.xml
    ```
	- Install Office from the downloaded Office files (can be done Offline)
	```
	cd /d C:\Office\
    setup.exe /configure Configuration.xml
    ```

</TabItem>
</Tabs>

---

:::tip[Common errors]

- Make sure you are entering those commands in command prompt (CMD) as admin.
- File name extensions are hidden by default in Windows. Due to that, some people might incorrectly rename `Configuration.xml` to `Configuration.xml.xml` because `.xml` was not visible.

:::

------------------------------------------------------------------------

## Alternative Methods

-   [YAOCTRU](https://github.com/abbodi1406/WHD/raw/master/scripts/YAOCTRU_v11.0.zip) (Office Downloader) & [YAOCTRI](https://github.com/abbodi1406/WHD/raw/master/scripts/YAOCTRI_v11.2.zip) (Office Installer)
-   [Office Tool Plus](http://otp.landian.vip/)

------------------------------------------------------------------------

## Need help?

-   Check [here](troubleshoot.md).
