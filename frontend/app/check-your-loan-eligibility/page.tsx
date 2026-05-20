"use client";

import HeroBanner from "@/components/banner/HeroBanner";
import Script from "next/script";

import "./style.css";

export default function CheckYourLoanEligibilityPage() {
    return (
        <>
            {/* HERO BANNER */}
            <HeroBanner
                slug="check-your-loan-eligibility"
                minHeight={{ xs: 400, sm: 400, lg: 450 }}
                size="medium"
                disableSectionPadding
                rightMaxWidth={480}
                alignSelf="flex-end"
            />

            {/* SCRIPTS */}
            <Script
                src="https://emicalculator.net/widget/2.0/js/emicalc-loader.min.js"
                strategy="afterInteractive"
            />

            <Script
                src="https://static.elfsight.com/platform/platform.js"
                strategy="afterInteractive"
            />

            {/* PAGE */}
            <main className="metaFinance">

                {/* BREADCRUMB */}
                <section className="breadcrumbs">
                    <div className="loan-container">

                        <ul className="breadcrumb-list">
                            <li>
                                <a href="/">Home</a>
                            </li>

                            <li>/</li>

                            <li>
                                <a href="/metafinance">
                                    MetaFinance
                                </a>
                            </li>

                            <li>/</li>

                            <li>Loan Calculator</li>
                        </ul>

                    </div>
                </section>

                {/* EMI SECTION */}
                <section className="section-spacing">
                    <div className="loan-container">

                        <h2 className="heading_spacing">
                            Education Loan <span>EMI Calculator</span>
                        </h2>

                        {/* EMI WIDGET */}
                        <div className="widget-wrapper">
                            <div
                                className="elfsight-app-98378002-447c-4b6f-8cd7-ddc4e12451a7 loan-calc-widget"
                                data-elfsight-app-lazy
                            ></div>
                        </div>

                        {/* BUTTON */}
                        <div className="text-center mt-4 pt-4">
                            <a href="/metafinance">
                                <button className="apply-btn">
                                    Apply Education Loan Today
                                </button>
                            </a>
                        </div>

                    </div>
                </section>
            </main>
        </>
    );
}