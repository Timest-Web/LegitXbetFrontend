const DepositColumn = ()=>[
    {
      header: "No",
      accessorKey: "id",
    },
    {
      header: "Reference ID",
      accessorKey: "reference",
    },
    {
      header: "Date",
      accessorKey: "createdAt",
    },
    {
      header: "Status",
      accessorKey: "status",
    },
    {
      header: "Amount",
      accessorKey: "amount",
    },
    {
      header: "Channel",
      accessorKey: "merchant",
    },
  ];

export default DepositColumn;