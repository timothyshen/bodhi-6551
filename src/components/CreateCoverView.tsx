import { useEffect, useState } from 'react';
import { getAllCopyright } from '@/lib/CopyrightContract';
import { CopyrightCard } from './Card/CopyrightCard';
import { CreateCopyright } from './Modal/CreateCopyright';
import { useAccount } from 'wagmi';
import { BodhiCardView } from '@/components/BodhiCardView';
import { PriceData, } from '@/types/steptypes';



const CreateCoverView = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [works, setWorks] = useState<any[]>([]); // Ensure this is typed correctly as an array
    const [isMintedCopyright, setIsMintedCopyright] = useState<boolean>(false)
    const [isMintedBodhi, setIsMintedBodhi] = useState<boolean>(false)
    const [prices, setPrices] = useState<PriceData>();

    const account = useAccount();

    const handlePriceUpdate = (coverAcc: any, ethPrice: any, usdPrice: any) => {
        setPrices(prevPrices => {
            if (!prevPrices) {
                return {
                    [coverAcc]: {
                        eth: ethPrice,
                        usd: usdPrice,
                    },
                };
            }
            const existing = prevPrices[coverAcc] || { eth: 0, usd: 0 };
            console.log('existing', existing)
            return {
                ...prevPrices,
                [coverAcc]: {
                    eth: existing.eth + ethPrice,
                    usd: existing.usd + usdPrice,
                },
            };
        });
    };

    useEffect(() => {
        const init = async () => {
            setLoading(true);
            try {
                const work = await getAllCopyright();
                // console.log('work', work[0].id)
                setWorks([...work]);
            } catch (error) {
                console.error("Failed to fetch works:", error);
            }
            setLoading(false); // Correctly set loading to false after the operation
        };
        init();
    }, [isMintedCopyright]);


    // TODO: fix onPriceUpdate
    return (
        <>
            <CreateCopyright setIsMinted={setIsMintedCopyright} />
            {works && works.map((work: any, index: number) => (
                // Notice the return statement here and the key prop
                <>
                    <CopyrightCard
                        key={work.id} // Assuming `work.id` is unique
                        id={Number(work.id)}
                        address={(work.owner).slice(0, 6) + '...' + (work.owner).slice(-4)}
                        owner={account.address == work.owner}
                        content={work.description}
                        title={work.title}
                        coverAcc={work.nftAccount}
                        setIsMintedBodhi={setIsMintedBodhi}
                        aggregatePrice={prices}
                    />
                    <BodhiCardView nftAccount={work.nftAccount as `0x${string}`} onPriceUpdate={handlePriceUpdate} isMintedBodhi={isMintedBodhi} /> {/* Update the type of `nftAccount` prop */}
                </>
            ))}

            {loading && <p>Loading...</p>} {/* Display loading state */}
        </>
    );
};

export default CreateCoverView;
