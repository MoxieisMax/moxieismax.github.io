# setup-node-and-run.ps1
# Helper script to install nvm-windows (if missing) and run the dev server for the project.
# Run as a normal user. The nvm installer will prompt for elevation if needed.

function Check-Command($name){
  return (Get-Command $name -ErrorAction SilentlyContinue) -ne $null
}

if (Check-Command npm) {
  Write-Host "Node/npm found. Installing dependencies and starting dev server..."
  Set-Location -Path (Join-Path $PSScriptRoot '.')
  cd site-react
  npm install
  npm run dev
  return
}

Write-Host "Node/npm not found. I'll download the nvm-windows installer for you."
$installer = Join-Path $env:TEMP 'nvm-setup.exe'
$uri = 'https://github.com/coreybutler/nvm-windows/releases/latest/download/nvm-setup.exe'
Write-Host "Downloading nvm-windows installer to $installer"
Invoke-WebRequest -Uri $uri -OutFile $installer -UseBasicParsing
Write-Host "Launching installer. Please follow the GUI prompts to complete installation."
Start-Process -FilePath $installer -Wait

Write-Host "When the installer finishes, open a NEW PowerShell window (important). Then run the following commands to install Node LTS and start the dev server:`n"
Write-Host "nvm install lts" -ForegroundColor Yellow
Write-Host "nvm use lts" -ForegroundColor Yellow
Write-Host "cd $(Split-Path -Path $PSScriptRoot -Leaf)/site-react" -ForegroundColor Yellow
Write-Host "npm install" -ForegroundColor Yellow
Write-Host "npm run dev" -ForegroundColor Yellow

Write-Host "If you prefer the Node installer instead, download from https://nodejs.org/en/ and run the `.msi` installer, then run the npm commands above." -ForegroundColor Cyan
