import React from "react";

const DataTable = ({ columns, data }) => {
  return (
    <div className="shadow-lg rounded-lg md:mt-5 overflow-x-auto">
      <table className="table w-full">
        <thead className="bg-base-200">
          <tr>
            {columns.map((col) => (
              <th key={col.key} className={col.headerClassName || ""}>
                {col.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data?.map((row, idx) => (
            <tr key={row.id || idx}>
              {columns.map((col) => (
                <td
                  key={col.key}
                  className={col.className || ""}
                >
                  {col.render
                    ? col.render(row[col.key], row, idx)
                    : col.key === "serial"
                    ? idx + 1
                    : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
