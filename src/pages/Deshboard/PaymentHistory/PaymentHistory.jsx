import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const [selectedPayment, setSelectedPayment] = useState(null);
  
  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments/${user.email}`);
      return res.data;
    }
  });
  
  const handleViewDetails = (payment) => {
    setSelectedPayment(payment);
  };
  
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Payment History</h2>
      
      {payments.length === 0 ? (
        <div className="text-center py-8">
          <p className="text-lg text-gray-500">No transaction history available</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6">
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Email</th>
                  <th>Transaction ID</th>
                  <th>Total Price</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                  {payments.map((payment, index) => (
                    <tr key={payment._id}>
                    <th>{index + 1}</th>
                    <td>{payment.email}</td>
                    <td>{payment.transactionId}</td>
                    <td>${payment.price}</td>
                    <td>{new Date(payment.date).toLocaleDateString()}</td>
                    <td>
                      <span className="badge badge-success">{payment.status || "Completed"}</span>
                    </td>
                    <td>
                      <button 
                        onClick={() => handleViewDetails(payment)} 
                        className="btn btn-xs btn-primary"
                      >
                        Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          {selectedPayment && (
            <div className="bg-base-200 p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold">Payment Details</h3>
                <button 
                  onClick={() => setSelectedPayment(null)} 
                  className="btn btn-sm btn-circle"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <p><span className="font-semibold">Transaction ID:</span> {selectedPayment.transactionId}</p>
                  <p><span className="font-semibold">Date:</span> {new Date(selectedPayment.date).toLocaleString()}</p>
                  <p><span className="font-semibold">Email:</span> {selectedPayment.email}</p>
                  <p><span className="font-semibold">Total Amount:</span> ${selectedPayment.price}</p>
                </div>
                
                <div className="space-y-2">
                  <p><span className="font-semibold">Status:</span> {selectedPayment.status || "Completed"}</p>
                  {selectedPayment.menuItems && (
                    <div>
                      <p className="font-semibold mb-2">Ordered Items:</p>
                      <ul className="list-disc pl-5">
                        {selectedPayment.menuItems.map((item, idx) => (
                          <li key={idx}>{item.name} - ${item.price}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default PaymentHistory;
