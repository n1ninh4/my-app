 
public class meusregistros  {  
    public static void main(String[] args) {  
        Thread nomeThread = new Thread(new Nome());  
        Thread idadeThread = new Thread(new Idade());  
        Thread cidadeThread = new Thread(new Cidade());  
        Thread despedidaThread = new Thread(new Despedida());  
        
        nomeThread.start();  
        try {  
            nomeThread.join(); 
        } catch (InterruptedException e) {  
            e.printStackTrace();  
        }  
        
        idadeThread.start();  
        try {  
            idadeThread.join(); 
        } catch (InterruptedException e) {  
            e.printStackTrace();  
        }  
        
        cidadeThread.start();  
        try {  
            cidadeThread.join(); 
        } catch (InterruptedException e) {  
            e.printStackTrace();  
        }  
        
        despedidaThread.start();  
    }  
}  


class Nome implements Runnable {  
    @Override  
    public void run() {  
        System.out.println("Meu nome é: Geovanna Maria");  
    }  
}  

 
class Idade implements Runnable {  
    @Override  
    public void run() {  
        System.out.println("Tenho 20 Anos");  
    }  
}  

 
class Cidade implements Runnable {  
    @Override  
    public void run() {  
        System.out.println("Moro em: Brasília - DF, Ceilândia, QNQ");  
    }  
}  
  
class Despedida implements Runnable {  
    @Override  
    public void run() {  
        System.out.println("Muito obrigado por me conhecer! Espero que tenhamos a chance de nos encontrar novamente.");
}
}