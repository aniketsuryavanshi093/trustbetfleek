import s from "./tokendetails.module.css";

import CopyIcon from "../../assets/imgs/copy-icon.svg";
import TBetIcon from "../../assets/imgs/t-bet-icon.svg";
import TBetGif from "../../assets/imgs/t-bet-gif.gif";
import { PageSection } from "../../page-section";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
export const TokenDetails = () => {
  const [copy, setCopy] = useState(false);
  const [refAnimate] = useAutoAnimate();
  return (
    <section
      id={PageSection.TBET_TOKENS}
      className={s["token-details"] + " " + "!mx-0"}
    >
      <div className="max-w-[80%] max-sm:max-w-full m-auto">
        <h2 className={s["token-title"]}>
          <span className="text-[--secondary-color]">Token</span> Details
        </h2>
        <div className={s["token-details-wrapper"]}>
          <div>
            <div className={s["token-details-header"]}>
              <ul className={s["token-details-header-cards"]}>
                <li className={s["token-details-header-card"]}>
                  <div className={s["card-head"]}>
                    <h3>Token Name</h3>
                  </div>
                  <p>TrustBet On-Chain</p>
                </li>
                <li className={s["token-details-header-card"]}>
                  <div className={s["card-head"]}>
                    <h3>Token Symbol</h3>
                  </div>
                  <p>TBET</p>
                </li>
                <li className={s["token-details-header-card"]}>
                  <div className={s["card-head"]}>
                    <h3>Token Type</h3>
                  </div>
                  <p>
                    Solana SPL
                    <br /> 6 Decimals
                  </p>
                </li>
                <li className={s["token-details-header-card"]}>
                  <div ref={refAnimate} className={s["card-head"]}>
                    <h3>Contract Address</h3>
                    <img
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigator.clipboard.writeText(
                          "xpFbKJa92Ee1NSYEhc3b3BVk4im8YStXRaVW6EoW33w",
                        );
                        setCopy(true);
                        setTimeout(() => {
                          setCopy(false);
                        }, 1000);
                      }}
                      src={CopyIcon}
                      alt=""
                    />
                    {copy && <p>Copied!</p>}
                  </div>
                  <p>
                    xpFbKJa92Ee1NSYEhc3b3BV
                    <br />
                    k4im8YStXRaVW6EoW33w
                  </p>
                </li>
              </ul>
              <div className={` gap-14 ${s["token-details-footer"]}`}>
                <img className={s["tbet-gif"]} src={TBetGif} alt="" />
                <div className="bg-[#ffffff0a] p-6 !rounded-2xl">
                  <p
                    className={
                      s["tokendetailkpara"] +
                      " text-[20px] leading-[35px] font-light"
                    }
                  >
                    <span className={s["green"]}>Current Stage Price</span> - <br className={s["separtormpobile"]} />
                    The first stage of presale will commence at a price of 0.10
                    USDT (Ten cents) for the first 5 million TBET tokens sold
                    and will increase in 2 cent increments thereafter. For
                    example, Stage 2 presale will be set at 0.12 USDT (Twelve
                    cents) for the second 5 million TBET allotment and will
                    continue at the same incremental rate with a maximum target
                    of 55 million TBET tokens to be sold or until its manual
                    completion. TrustBet distinguishes itself with a limited
                    maximum supply capped at 100 million tokens, significantly
                    lower than typical offerings. This makes the Presale price
                    point very lucrative for early adopters who recognize before
                    others the immense potential of the TrustBet ecosystem and
                    its extremely generous rewards system for staked holders of
                    TBET tokens, whereby, they will be paid 50% of a bustling
                    Casino's profits as a form of passive income directly into
                    their wallet in USDT. Such a high rate of Casino profits
                    paid out in USDT is unprecedented and underscores our
                    commitment to rewarding our community and providing long
                    term value to our holders.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={s["article"]}>
            <div className={s["article-footer"]}>
              <h3>
                TrustBet On-Chain | KYC
                <br /> by Assure DeFi
              </h3>
              <p>
                This NFT is a sign of approval that the project TrustBet
                On-Chain has successfully passed a KYC by AssureDeFi.
              </p>
            </div>
            <div className={` mt-10 ${s["article-header"]}`}>
              <p className="max-sm:text-[20px] max-sm:leading-5">
                <span>Please note:</span> You will need to manually add the TBET
                details to all wallets EXCEPT Phantom Wallet. Phantom Wallet has
                been updated automatically being a native wallet to Solana DAO
                interaction. All other wallets will show TBET as an SPL picture.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
