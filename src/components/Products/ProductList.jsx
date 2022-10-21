import { useState } from "react";
import { ListView, GridView, Search } from "../../components";

import { BsFillGridFill } from "react-icons/bs";
import { MdOutlineSubject } from "react-icons/md";

const ProductList = ({ products }) => {
	const [grid, setGrid] = useState(true);

	return (
		<main>
			<header className="flex flex-col gap-y-4 md:flex-row md:items-center justify-between border-b pb-2">
				<div className="flex gap-2 items-center">
					<div className="flex gap-4">
						<BsFillGridFill
							size={28}
							onClick={() => setGrid(true)}
							className={` rounded-md p-1 ${grid ? "bg-neutral text-white" : null}`}
						/>
						<MdOutlineSubject
							size={28}
							onClick={() => setGrid(false)}
							className={` rounded-md p-1 ${grid ? null : "bg-neutral text-white"}`}
						/>
					</div>
					<div>
						<h1>
							<span className="font-bold">10 </span>- Products Found
						</h1>
					</div>
				</div>

				<Search />
				<div className="flex gap-2 items-center">
					<label>Sort by:</label>
					<select name="" id="" className="select select-sm select-bordered">
						<option value="latest">Latest</option>
						<option value="lowest-price">Lowest Price</option>
						<option value="highest-price">Highest Price</option>
						<option value="a2z">A - Z</option>
						<option value="z2a">Z - A</option>
					</select>
				</div>
			</header>
			<section>{grid ? <GridView /> : <ListView />}</section>
		</main>
	);
};

export default ProductList;
