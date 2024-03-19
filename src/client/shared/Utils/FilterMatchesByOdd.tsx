export const filterMatchesByOdd = (matches: any, odd: string) => {
    return Array.isArray(matches) ? matches.filter((match: any) => {
        // Filter odds for each market in the match
        match.markets.forEach((market: any) => {
            market.odds = market.odds.filter((oddValue: any) => parseFloat(oddValue.value) <= parseFloat(odd));
        });
        
        // Check if any market has odds left after filtering
        return match.markets.some((market: any) => market.odds.length > 0);
    }) : [];
};
