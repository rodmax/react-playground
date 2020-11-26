import { UsersListStateSlice } from './users-list.reducer'

export const selectUsersListState = (state: UsersListStateSlice) => state.usersList
