#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "${SCRIPT_DIR}/.." && pwd)"
SRC_DIR="${ROOT_DIR}/src"
TMP_DIR="${ROOT_DIR}/tmp"

rm -rf "$TMP_DIR"

node "$SRC_DIR/render.ts"

CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"

for src in "$TMP_DIR"/*.html; do
  pdf="${src%.html}.pdf"
  "$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
    --print-to-pdf="$pdf" "file://$src"
  [ -s "$pdf" ] || { echo "FAIL: $pdf was not created" >&2; exit 1; }

  echo "OK: $pdf rebuilt ($(du -h "$pdf" | cut -f1))"
done
