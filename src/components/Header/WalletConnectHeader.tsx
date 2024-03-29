'use client'
import { AccountDisplayHeader } from "@/components/Header/AccountDisplayHeader";
import WalletOptions from "@/components/WalletOption";
import { useAccount } from "wagmi";
import CreateCoverView from "../CreateCoverView";
import {
    DialogDescription,
    DialogTitle,
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
} from "@/components/ui/dialog"

import { Button } from "@/components/ui/button"


const WalletConnectComponentHeader = () => {
    const { isConnected } = useAccount()

    return (
        <div className="max-h-52 flex flex-col">
            {isConnected ?
                (<>
                    <AccountDisplayHeader />
                </>) :
                (<>
                    <Dialog>
                        <DialogTrigger>
                            <Button variant="link" className='text-xl text-white'>
                                Connect
                            </Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Are you absolutely sure?</DialogTitle>
                            </DialogHeader>
                            <WalletOptions />
                        </DialogContent>
                    </Dialog>
                </>)}
        </div>
    )
}

export default WalletConnectComponentHeader;