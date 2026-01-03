
import AsyncStorage from '@react-native-async-storage/async-storage';

const getAsyncData = async(key: string, defaultRes : any = '')=>{
    //    try{
            let expensesData = await  AsyncStorage.getItem(key);
            expensesData = expensesData ? JSON.parse(expensesData):defaultRes;
            return expensesData;
        //  } catch(err){
        //     console.log(err)
        //     return Promise.reject('Issue while fetching data')
        //  }
}

const setAsyncData = async(key:string,data: any)=>{
    try{
        const dataString = JSON.stringify(data);
        await AsyncStorage.setItem(key,dataString);
    }catch(err){
        console.log(err)
         return Promise.reject('Issue while fetching data')
    }
}

const storeExpenseData = async(expenseData: any)=>{
   try{
    await setAsyncData('ExpenseData',expenseData);
    return Promise.resolve('stored data successfuly')
   }catch(err){
    return Promise.reject(err)
   }
}

const getExpenseData = async()=>{
    let data = await getAsyncData('ExpenseData',[])
    return data;
}




export {getExpenseData, getAsyncData, storeExpenseData}