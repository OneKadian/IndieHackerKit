const StripePricingTable = () => {
  return (
    <div className="bg-gray-900 py-24 lg:py-32">
      {/* Test table below  */}
      <script async src="https://js.stripe.com/v3/pricing-table.js"></script>
      <stripe-pricing-table
        pricing-table-id=""
        publishable-key=""
      ></stripe-pricing-table>
    </div>
  );
};

export default StripePricingTable;
