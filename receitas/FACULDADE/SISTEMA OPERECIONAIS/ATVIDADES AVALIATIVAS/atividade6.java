public class MinhasInformacoes {
    public static void main(String[] args) {
        Thread nomeThread = new Nome();
        Thread idadeThread = new Idade();
        Thread cidadeThread = new Cidade();

        nomeThread.start();
        idadeThread.start();
        cidadeThread.start();

        try {
            nomeThread.join();
            idadeThread.join();
            cidadeThread.join();
        } catch (InterruptedException e) {
            System.out.println("Erro ao aguardar as threads: " + e.getMessage());
        }

       
        System.out.println(" \"Obrigado pela atenção, Foi um prazer me apresentar para vocês até a próxima\"!");
    }
}


class Nome extends Thread {
    @Override
    public void run() {
        System.out.println("Olá, me chamo Kaio Daniel Almeida Santos");
    }
}


class Idade extends Thread {
    @Override
    public void run() {
        System.out.println("Tenho 20 anos");
    }
}

class Cidade extends Thread {
    @Override
    public void run() {
        System.out.println("Moro em Brasilia, Ceilândia DF");
        }
}