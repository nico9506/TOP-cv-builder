const handlePrint = () => {
  // Get the content you want to print
  const printContent = document.getElementById("resume-preview").innerHTML;

  // Create a new window
  const printWindow = window.open("", "_blank");

  // Write the content to the new window
  printWindow.document.open();
  printWindow.document.write(`
      <html>
        <head>
          <title>Print</title>
        </head>
        <body>
          ${printContent}
        </body>
      </html>
    `);
  printWindow.document.close();

  // Trigger the print dialog
  printWindow.print();
};

export default handlePrint;
