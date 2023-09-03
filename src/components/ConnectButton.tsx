"use client"

import { ConnectButton as RKitConnectButton } from "@rainbow-me/rainbowkit"
import { useWalletClient } from "wagmi"

export function ConnectButton() {
  console.log(useWalletClient())

  return <RKitConnectButton />
}
