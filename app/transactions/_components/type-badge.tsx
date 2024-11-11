import { Badge } from "@/app/_components/ui/badge"
import { Transaction, TransactionType } from "@prisma/client"
import { CircleIcon } from "lucide-react"

interface TransactionTypeBadgeProps {
    transaction: Transaction
}

const TransactionTypeBadge= ({transaction}: TransactionTypeBadgeProps) => {
    if (transaction.type === TransactionType.DEPOSIT) {
        /*  return "Depósito"; */
        return <Badge className="bg-muted bg-opacity-10 text-primary hover:bg-muted font-bold">
         <CircleIcon className="fill-primary mr-2" size={10}></CircleIcon>
         Depósito
         </Badge>
       }
       if (transaction.type === TransactionType.EXPENSE) {
         /* return "Despesa"; */
         return <Badge className="bg-danger bg-opacity-10 text-danger  font-bold hover:bg-muted">
         <CircleIcon className="fill-danger mr-2" size={10}></CircleIcon>
         Despesa
         </Badge>
       }
      /*  return "Investimetno"; */
      return <Badge className="bg-muted text-white hover:bg-muted font-bold">
         <CircleIcon className="fill-white mr-2" size={10}></CircleIcon>
         Investimento
         </Badge>
}

export default TransactionTypeBadge;
