export const addCompanyToFavorite = (companyToAdd) => ({
  type: "ADD_COMPANY_TO_FAVORITE",
  payload: companyToAdd,
});

export const removeCompanyFromFavorite = (index) => ({
  type: "REMOVE_COMPANY_FROM_FAVORITE",
  payload: index,
});
