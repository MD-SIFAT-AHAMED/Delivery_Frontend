import React, { useState } from "react";
import {
  Package,
  Clock,
  Users,
  CheckCircle,
  Truck,
  CreditCard,
  Wallet,
  UserCheck,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import StatCard from "./StatCard";

const AdminDashboard = () => {
  const axiosInstance = useAxiosSecure();
  const { data } = useQuery({
    queryKey: ["totalSummay"],
    queryFn: async () => {
      const result = await axiosInstance.get("/api/v1/admin/total-summary");
      return result.data.data[0];
    },
    enabled: true,
  });

  return (
    <div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        <StatCard
          title="Total Parcels"
          value={data?.totalParcels}
          icon={Package}
          color="bg-blue-500"
        />
        <StatCard
          title="Pending"
          value={data?.pending}
          icon={Clock}
          color="bg-yellow-500"
        />
        <StatCard
          title="Assigned"
          value={data?.assigned}
          icon={UserCheck}
          color="bg-orange-500"
        />
        <StatCard
          title="Picked"
          value={data?.picked}
          icon={Truck}
          color="bg-teal-500"
        />

        <StatCard
          title="In Transit"
          value={data?.inTransit}
          icon={Truck}
          color="bg-indigo-500"
        />
        <StatCard
          title="Delivered"
          value={data?.delivered}
          icon={CheckCircle}
          color="bg-green-600"
        />

        <StatCard
          title="Paid"
          value={data?.paid}
          icon={CreditCard}
          color="bg-green-500"
        />
        <StatCard
          title="Unpaid"
          value={data?.unpaid}
          icon={Wallet}
          color="bg-red-500"
        />

        <StatCard
          title="Total Riders"
          value={data?.totalRiders}
          icon={Users}
          color="bg-purple-500"
        />

        <StatCard
          title="Pending Rider Apps"
          value={data?.pendingRiderApps}
          icon={Users}
          color="bg-pink-500"
        />
      </div>
    </div>
  );
};

export default AdminDashboard;
