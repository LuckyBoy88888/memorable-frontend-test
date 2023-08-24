import { Avatar } from "antd";
import { ColumnsType } from "antd/es/table";
import dayjs from "dayjs";
import { FC } from "react";
import { TableUI } from "src/app/ui/tables/table.ui";
import { CreativeLibraryItem } from "src/graphql/client";

export const CreativeTableWidget: FC<any> = ({ data = [] }) => {
  const generateCreativeKey = (creative: CreativeLibraryItem) => ({
    ...creative,
    key: creative.creativeId,
  });

  const columns: ColumnsType<CreativeLibraryItem> = [
    {
      title: "Name",
      dataIndex: "name",
      render: (name, record) => {
        return (
          <div style={{ display: "flex", gap: "8px" }}>
            <Avatar
              src={record.url}
              style={{
                backgroundColor: "rgb(230 244 255)",
                color: "#1677ff",
                fontWeight: "bold",
              }}
            >
              {record.url ? "" : name[0]}
            </Avatar>
            <div className="flex items-center">
              <div>{name}</div>
            </div>
          </div>
        );
      },
    },
    {
      title: "Uploaded Date",
      dataIndex: "createdAt",
      render: (uploadDate) => {
        return <div>{dayjs(uploadDate).format("MM/DD/YYYY")}</div>;
      },
    },
    {
      title: "File Type",
      dataIndex: "fileType",
      render: (fileType) => {
        return <div>{fileType}</div>;
      },
    },
  ];

  return <TableUI columns={columns} data={data.map(generateCreativeKey)} />;
};
