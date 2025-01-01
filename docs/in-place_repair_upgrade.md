# In-place Repair Upgrade

(Keeping files and apps)

---

In-place repair upgrade using Windows ISO file is a good way to fix system errors. Here's how you can perform it.

-   Download the Windows ISO, preferably from [MSDL](https://msdl.gravesoft.dev/) in the **same Windows language, and architecture**.
    -   To check the installed Windows architecture, open Powershell as admin and enter,  
        `Get-WmiObject -Class Win32_OperatingSystem | Format-List OSArchitecture`  
        x64 means 64 Bit, x86 means 32 Bit
    -   To check the installed Windows Language, open Powershell as admin and enter,  
        `dism /english /online /get-intl | find /i "Default system UI language"`
    -   Note: If you are running the Enterprise LTSC edition, you will need to download that edition's ISO file. Don't download Evaluation version, that can't be activated.
-   Right-click on the downloaded ISO file, Open With > Windows Explorer
-   A new DVD drive will appear in Windows Explorer, which means the installation image has been mounted successfully.
<details>
  <summary>Windows 11 on Unsupported Hardware</summary>
- If you're using Windows 11 or upgrading from Windows 10, you may encounter errors due to unsupported hardware.
- To resolve this, open the command prompt as admin and,
  - Enter the below command if you are using normal Windows 11 24H2 ISO  
`reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion" /v EditionID /d IoTEnterprise /f`
  - Enter the below command if you are using Windows 11 LTSC 2024 ISO  
`reg add "HKLM\SOFTWARE\Microsoft\Windows NT\CurrentVersion" /v EditionID /d IoTEnterpriseS /f`
- Now quickly run setup.exe as described below.
</details>
-   Go into that DVD drive and run setup.exe, just continue until you reach the final confirmation screen.
-   Make sure it says "**Keep personal files and apps**" on the final screen. Then you can continue the process and wait until it is done.

---

:::tip

-   If you are not getting the option to keep files and apps, or the setup is showing any error, you can [connect with us](troubleshoot.md) for help.

:::
