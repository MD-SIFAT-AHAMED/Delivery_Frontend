import React from "react";
import {
  Package,
  Truck,
  CheckCircle,
  Clock,
  XCircle,
  DollarSign,
} from "lucide-react";
import StatCard from "../../Admin/AdminDashboard/StatCard";

const RiderDashboard = ({ data }) => {
  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      <StatCard
        title="Assigned Parcels"
        value={data?.assigned}
        icon={Package}
        color="bg-orange-500"
      />

      <StatCard
        title="Pending Pickup"
        value={data?.pendingPickup}
        icon={Clock}
        color="bg-yellow-500"
      />

      <StatCard
        title="On The Way"
        value={data?.inTransit}
        icon={Truck}
        color="bg-blue-500"
      />

      <StatCard
        title="Delivered"
        value={data?.delivered}
        icon={CheckCircle}
        color="bg-green-600"
      />

      <StatCard
        title="Cancelled"
        value={data?.cancelled}
        icon={XCircle}
        color="bg-red-600"
      />

      <StatCard
        title="Today's Delivery"
        value={data?.today}
        icon={Clock}
        color="bg-indigo-500"
      />

      <StatCard
        title="Total Earnings"
        value={data?.earning}
        icon={DollarSign}
        color="bg-green-500"
      />
    </div>
  );
};

export default RiderDashboard;
