async function main() {
  const BoxV2 = await ethers.getContractFactory("BoxV2");
  let box = await upgrades.upgradeProxy(
    "0x7F78Dead298C3568b30d3525c0B2b0b107E3E575",
    BoxV2
  );
  console.log("Your upgraded proxy is done!", box.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
