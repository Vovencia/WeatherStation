import ICityResultItem from "@interfaces/ICityResultItem";

export default interface IStateCityChoose {
	loading: boolean;
	open: boolean;
	result: ICityResultItem[];
	query: string;
}