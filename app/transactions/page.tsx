import { db } from "../_lib/prisma";
import { DataTable } from "../_components/ui/data-table";
import { transactionColumns } from "./_columns";
import AddTransactionButton from "../_components/add-transaction-button";
import Navbar from "../_components/ui/navbar";

const TransactionsPage = async () => {
  const transactions = await db.transaction.findMany({});
  return (
    <>
      <Navbar/>
      <div className="p-6 space-y-6">
        {/* Titulo e botão */}
        <div className="flex w-full justify-between items-center">
          <h1 className="font bold text-2xl">Transações</h1>
          <AddTransactionButton />
        </div>

        {/* Data table */}
        <DataTable columns={transactionColumns} data={transactions}></DataTable>
      </div>
    </>
  );
};

export default TransactionsPage;
