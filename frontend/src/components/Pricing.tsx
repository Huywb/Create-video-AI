import Title from './Title';
import { PricingTable } from '@clerk/react';

export default function Pricing() {
    return (
        <section id="pricing" className="py-20 bg-white/3 border-t border-white/6">
            <div className="max-w-6xl mx-auto px-4">

                <Title
                    title="Pricing"
                    heading="Pricing Plans"
                    description="Our Pricing Plans are designed to provide maximum value and flexibility for businesses of all sizes. Whether you're a startup looking to get off the ground or an established brand ready to scale, we have a plan that fits your needs and budget."
                />

                <div className="flex flex-wrap items-center justify-center max-w-5xl mx-auto">
                   <PricingTable appearance={{
                    variables: {
                        colorBackground: 'none',
                    },
                    elements:{
                        pricingTableCardBody: 'bg-white/6',
                        pricingTableCardHeader: 'bg-white/10',
                        switchThumb: 'bg-white'
                    }
                   }}/>
                </div>
            </div>
        </section>
    );
};