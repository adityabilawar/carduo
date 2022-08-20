export const isUserAuth = (store: Storage): boolean => {
	const authData = store.getItem('auth');
	if(!authData || authData==="") return false;
	return true;
}