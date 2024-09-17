class Admin::FaqsController < ApplicationController
  before_action :set_faq, only: %i[destroy]
  def index
    @faqs = Faq.all
  end

  # DELETE admin/faqs/1 or admin/faqs/1.json
  def destroy
    @faq.destroy

    respond_to do |format|
      format.html { redirect_to admin_faqs_path, status: :see_other, notice: 'Faq was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private

  # Use callbacks to share common setup or constraints between actions.
  def set_faq
    @faq = Faq.find(params[:id])
  end
end
