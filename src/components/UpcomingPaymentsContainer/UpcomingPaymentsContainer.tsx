import UpcomingPaymentCard from "../UpcomingPaymentCard/UpcomingPaymentCard";

const UpcomingPaymentsContainer = () => {
    return (
        <section className="flex overflow-y-hidden overflow-x-auto gap-3 w-auto whitespace-nowrap mr-[-1.5rem]">
            <UpcomingPaymentCard />
            <UpcomingPaymentCard />
            <UpcomingPaymentCard />
        </section>
    );
}

export default UpcomingPaymentsContainer;