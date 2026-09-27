@echo off
rem Copy everything needed to move this project to another PC onto a USB drive.
rem Usage (Command Prompt):  scripts\copy-to-usb.cmd [drive letter, default D]
rem Skips node_modules, dist and .astro (rebuilt by npm install / npm run build).
rem Re-running only copies files that changed.

setlocal
set DRIVE=%~1
if "%DRIVE%"=="" set DRIVE=D
set SRC=C:\Claude\Projects\kohn-french-art-collections
set CLAUDEDATA=%USERPROFILE%\.claude\projects\C--Claude-Projects-kohn-french-art-collections
set DEST=%DRIVE%:\Kohn-migration

if not exist %DRIVE%:\ (
  echo Drive %DRIVE%: not found.
  exit /b 1
)

echo Copying project to %DEST%\kohn-french-art-collections ...
robocopy "%SRC%" "%DEST%\kohn-french-art-collections" /E /XD node_modules dist .astro /R:1 /W:1 /NFL /NDL /NP
if %ERRORLEVEL% GEQ 8 goto fail

echo Copying Claude memory and chat history to %DEST%\claude-project-data ...
robocopy "%CLAUDEDATA%" "%DEST%\claude-project-data" /E /R:1 /W:1 /NFL /NDL /NP
if %ERRORLEVEL% GEQ 8 goto fail

echo.
echo Done. Next: follow MIGRATION.md on the new PC.
exit /b 0

:fail
echo Copy FAILED - see messages above.
exit /b 1
